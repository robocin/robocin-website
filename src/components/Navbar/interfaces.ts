import { NextRouter } from 'next/router'

interface LanguageOption {
  label: string
  value: string
}

interface NavOption {
  label: string
  link: string
}

export interface NavbarProps {
  navOptions: NavOption[]
  languages: LanguageOption[]
  router: NextRouter
  locale?: string
  onChangeLanguage: React.ChangeEventHandler<HTMLSelectElement>
}
