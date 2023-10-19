interface Translate {
  title: string
  description: string
  button_label: string
}

export interface TDPSectionDefaultProps {
  translate: Translate
}

export interface TDPSectionProps extends TDPSectionDefaultProps {
  tdpsUrl: string
}
