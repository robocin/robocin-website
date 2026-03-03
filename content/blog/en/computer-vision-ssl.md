---
title: How We See the Field: Computer Vision in SSL
date: 2025-03-10
author: Vision & Perception Team
excerpt: A deep dive into the computer vision stack powering our Small Size League robots — from raw camera frames to real-time object tracking at 60 Hz.
tags: Research, Computer Vision
---

## The Problem of Seeing Fast Enough

In the Small Size League, a shared overhead camera captures the entire field at 60 frames per second. Every frame must be processed fast enough so that robot decisions account for the *current* state of the game, not a state that's already 100 ms stale.

That constraint shapes every design choice in our vision pipeline.

## Pipeline Overview

Our vision stack runs as a separate process that publishes game state over a local UDP socket. The pipeline has five stages:

1. **Frame capture** — raw frames are read from the SSL-Vision server
2. **Distortion correction** — lens distortion parameters are calibrated at the start of each match
3. **Blob detection** — orange ball and colored robot markers are isolated using HSV thresholding
4. **Kalman filtering** — positions and velocities are estimated with a constant-acceleration model
5. **State publication** — a structured game-state packet is broadcast to all robot controllers

End-to-end latency from camera capture to robot receipt is consistently under 8 ms on our match hardware.

## Kalman Filtering for Ball Tracking

The ball is the hardest object to track reliably. It moves at up to 6.5 m/s during a maximum-power kick, which means it can travel nearly half a meter between frames.

Our Kalman filter models the ball with a 4-state vector `[x, y, vx, vy]` and a constant-velocity prediction step. When the ball is occluded (hidden under a robot), we continue predicting its position for up to 12 frames before marking it as lost.

```python
# Simplified prediction step
x_pred = F @ x_prev
P_pred = F @ P_prev @ F.T + Q
```

Where `F` is the state transition matrix and `Q` is the process noise covariance tuned empirically from match data.

## Robot Marker Detection

Each robot wears a unique pattern of colored dots on its top plate. We identify teams by a central dot color (blue or yellow) and individual robots by the arrangement of four surrounding dots.

This year we switched from a lookup-table approach to a small CNN trained on 12,000 annotated frames. Detection accuracy improved from 97.3% to 99.1%, and the model runs comfortably within our latency budget on a CPU.

## Future Work

We are exploring event-based cameras — sensors that report pixel-level brightness changes asynchronously — which could push our effective tracking rate well above 1,000 Hz. Early results from our lab prototype are promising.
