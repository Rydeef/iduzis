import ContentContainer from "../../../sharedComponents/ContentContainer";
import Logo from '../../../images/logo4.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import IconWrapper from "../../../sharedComponents/IconWrapper";

const HomeHeader = () => {
    const onLogOutClick = () => {

    }

  return (
      <div className="w-full h-14 bg-lightBlue mb-12">
        <ContentContainer className="flex items-center justify-between">
            <img src={Logo} alt="logo" width={80}/>
            <div className="flex items-center gap-4">
                <span className="text-xl">
                    user name
                </span>
                <IconWrapper onClick={onLogOutClick}>
                    <LogoutIcon/>
                </IconWrapper>
            </div>
        </ContentContainer>
      </div>
  )
}
export default HomeHeader;