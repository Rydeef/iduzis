import Calendar from "./Calendar";
import Tabs from "./Tabs";
import ContentContainer from "../../../sharedComponents/ContentContainer";
import HomeHeader from "../homeHeader/HomeHeader";

const HomeContainer = () => {
    return (
        <div className="w-full min-h-[100vh]">
            <ContentContainer className="sm:flex gap-0 sm:gap-4 md:gap-10 px-6">
                <Calendar/>
                <Tabs/>
            </ContentContainer>
        </div>
    )
}
export default HomeContainer;