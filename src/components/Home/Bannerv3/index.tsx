import { StyledBanner, StyledImage, StyledContent } from './style'
import { Robot } from '@/assets'

const Banner = ({ translate }: { translate: any }) => {
  return (
    <StyledBanner>
      <StyledImage src={Robot} alt="Robô" />
      <StyledContent>
        <h2>
          <span>RobôCIn:</span> {translate.title}
        </h2>
        <p>{translate.complement}</p>
      </StyledContent>
    </StyledBanner>
  )
}

export default Banner
