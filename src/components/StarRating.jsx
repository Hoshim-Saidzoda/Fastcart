import React from "react";
import { StarBorder } from "@mui/icons-material";

 const StarRating = ({ count = 5 }) => (
  <div className="flex text-amber-400">
    {Array.from({ length: count }).map((_, i) => (
      <StarBorder key={i} fontSize="small" />
    ))}
  </div>
);

export default React.memo(StarRating);
