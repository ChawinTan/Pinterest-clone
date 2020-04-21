import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";

function Search(props) {
    const { exitSearch, searchItems } = props;

    const handleExitSearch = () => {
        exitSearch(false);
    }

    return (
        <div>
            <Tooltip title="Exit">
                <IconButton aria-label="exit" onClick={handleExitSearch} >
                    <ExitToAppIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default Search;
