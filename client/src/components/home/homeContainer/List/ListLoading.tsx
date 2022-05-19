import ShimmerBlock from "../../../../sharedComponents/Shimmer";

const ListLoading = () => {
    return(
        <div>
            {[1,2,3,4,5,6,7].map(()=><ShimmerBlock className="w-full h-11 border-b-2 mb-2"/>)}
        </div>
    )
}
export default ListLoading