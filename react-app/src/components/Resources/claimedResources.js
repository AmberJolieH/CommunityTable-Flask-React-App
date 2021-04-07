/** @jsx jsx */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsx } from "@emotion/react";
import { getPostedResources } from "../../store/resources"
import { Link, useParams } from "react-router-dom";

const ClaimedResources = () => {
    return (
        <h1>This is the claimed Resources page</h1>
    )
};

export default ClaimedResources;
