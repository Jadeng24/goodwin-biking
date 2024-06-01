import { Link } from "react-router-dom";

import { Breadcrumbs, Typography } from "@mui/material";
interface ItemBreadcrumbsProps {
  name: string;
}
const ItemBreadcrumbs = (props: ItemBreadcrumbsProps) => {
  const { name } = props;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/">
        Home
      </Link>
      <Link color="inherit" to="/bikepacking-bags">
        Bikepacking Bags
      </Link>
      <Typography color="text.primary">{name}</Typography>
    </Breadcrumbs>
  );
};

export default ItemBreadcrumbs;
