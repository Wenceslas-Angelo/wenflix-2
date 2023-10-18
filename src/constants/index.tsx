import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  MdOutlineCollections,
  MdOutlineReviews,
  MdOutlineGames,
} from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaHashtagSolid } from "react-icons/lia";
import {
  SiGamedeveloper,
  SiSpringCreators,
  SiGradleplaypublisher,
} from "react-icons/si";

export const Links = [
  {
    name: "home",
    path: "/",
    icon: <BiHomeAlt2 />,
  },
  {
    name: "reviews",
    path: "/reviews",
    icon: <MdOutlineReviews />,
  },
  {
    name: "collections",
    path: "/collections",
    icon: <MdOutlineCollections />,
  },
  {
    name: "platforms",
    path: "/platforms",
    icon: <IoGameControllerOutline />,
  },
  {
    name: "stores",
    path: "/stores",
    icon: <BsDownload />,
  },
  {
    name: "genres",
    path: "/genres",
    icon: <MdOutlineGames />,
  },
  {
    name: "Creators",
    path: "/Creators",
    icon: <SiSpringCreators />,
  },
  {
    name: "Developers",
    path: "/Developers",
    icon: <SiGamedeveloper />,
  },
  {
    name: "Tags",
    path: "/Tags",
    icon: <LiaHashtagSolid />,
  },
  {
    name: "Publishers",
    path: "/Publishers",
    icon: <SiGradleplaypublisher />,
  },
];
