import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { sumObjectValues } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Sport Galaxy</h1>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <IconButton aria-label="cart">
            <Badge badgeContent={sumObjectValues()} color="primary">
              <ShoppingCart style={{ color: "white" }} />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
