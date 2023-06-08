import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoading = () => {
  return (
    <Box>
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
    </Box>
  );
};
export default SkeletonLoading;
