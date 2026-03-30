---
title: Como Enxergamos o Campo: Visão Computacional no SSL
date: 2025-03-10
author: Equipe de Visão e Percepção
excerpt: Uma análise aprofundada da stack de visão computacional que alimenta nossos robôs da Small Size League — desde frames brutos de câmera até rastreamento de objetos em tempo real a 60 Hz.
tags: Pesquisa, Visão Computacional
---

## O Problema de Ver Rápido o Suficiente

Na Small Size League, uma câmera aérea compartilhada captura o campo inteiro a 60 quadros por segundo. Cada frame precisa ser processado rápido o suficiente para que as decisões dos robôs reflitam o estado *atual* do jogo, não um estado já 100 ms desatualizado.

Essa restrição molda cada decisão de design em nosso pipeline de visão.

## Visão Geral do Pipeline

Nossa stack de visão roda como um processo separado que publica o estado do jogo em um socket UDP local. O pipeline tem cinco etapas:

1. **Captura de frames** — frames brutos são lidos do servidor SSL-Vision
2. **Correção de distorção** — parâmetros de distorção de lente são calibrados no início de cada partida
3. **Detecção de blobs** — a bola laranja e os marcadores coloridos dos robôs são isolados usando limiarização HSV
4. **Filtragem de Kalman** — posições e velocidades são estimadas com um modelo de aceleração constante
5. **Publicação de estado** — um pacote estruturado de estado do jogo é transmitido a todos os controladores de robô

A latência ponta a ponta da captura pela câmera até o recebimento pelo robô é consistentemente inferior a 8 ms no nosso hardware de partida.

## Filtragem de Kalman para Rastreamento de Bola

A bola é o objeto mais difícil de rastrear com confiança. Ela se move a até 6,5 m/s durante um chute de força máxima, o que significa que pode viajar quase meio metro entre frames.

Nosso filtro de Kalman modela a bola com um vetor de 4 estados `[x, y, vx, vy]` e uma etapa de predição com velocidade constante. Quando a bola está ocluída (escondida sob um robô), continuamos prevendo sua posição por até 12 frames antes de marcá-la como perdida.

```python
# Etapa de predição simplificada
x_pred = F @ x_prev
P_pred = F @ P_prev @ F.T + Q
```

Onde `F` é a matriz de transição de estado e `Q` é a covariância de ruído de processo ajustada empiricamente a partir de dados de partidas.

## Detecção de Marcadores de Robô

Cada robô usa um padrão único de pontos coloridos em sua placa superior. Identificamos as equipes por uma cor de ponto central (azul ou amarelo) e os robôs individuais pelo arranjo de quatro pontos ao redor.

Neste ano, substituímos a abordagem de tabela de consulta por uma pequena CNN treinada em 12.000 frames anotados. A precisão de detecção melhorou de 97,3% para 99,1%, e o modelo roda confortavelmente dentro do nosso orçamento de latência em uma CPU.

## Trabalhos Futuros

Estamos explorando câmeras baseadas em eventos — sensores que reportam mudanças de brilho em nível de pixel de forma assíncrona — que poderiam elevar nossa taxa efetiva de rastreamento muito acima de 1.000 Hz. Os primeiros resultados do nosso protótipo de laboratório são promissores.
