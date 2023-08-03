import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useTranslation from '@/hooks/useTranslation'

import { LogoWithLabel } from '@/assets'

import * as S from './styles'

const Navbar = () => {
    const router = useRouter();
    const { locale } = router;

    const t = useTranslation();

    const navOptions = [
        {
            label: t.navbar.options.home,
            link: '/'
        },
        {
            label: t.navbar.options.categories,
            link: '/categories'
        },
        {
            label: t.navbar.options.team,
            link: '/team'
        },
        {
            label: t.navbar.options.papers,
            link: '/papers'
        },
    ];

    const languages = [
        {
            label: 'EN',
            value: 'en',
        },
        {
            label: 'PT',
            value: 'pt-BR',
        },
    ]

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = e.target.value;
        router.push(router.pathname, router.asPath, 
            { locale: selectedLocale }
        );
    }
    
    return (
        <S.Container>
            <Image src={LogoWithLabel} alt='logo'/>
            <S.NavOptions>
                {navOptions.map((option, index) => (
                    <S.StyledLink 
                    key={index+option.link}
                    href={option.link}
                    active={router.asPath === option.link ? 'true' : 'false'}>
                        {option.label}
                    </S.StyledLink>
                ))}
                <S.StyledSelect 
                name="Idioma" 
                onChange={changeLanguage}
                defaultValue={locale}
                >
                    {languages.map((language, index) => (
                        <option
                            key={index + language.label} 
                            value={language.value}
                            label={language.label}
                        />
                    ))}
                </S.StyledSelect>
            </S.NavOptions>
        </S.Container>
    )
}

export default Navbar