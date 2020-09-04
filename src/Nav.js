import React, { useState } from "react";
import "./Nav.css";

import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const Nav = () => {
  const [code, setCode] = useState();

  const [list, setList] = useState(["feed", "header", "footer"]);
  return (
    <div className="nav">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Material UI">
          <TreeItem
            nodeId="2"
            label="AppBar"
            onClick={() => setCode(`import calender`)}
          />
          <TreeItem nodeId="3" label="Drawer" />
          <TreeItem nodeId="4" label="BottomNav" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="Material-UI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="11" label="App">
          {list.map((e, index) => (
            <TreeItem nodeId={12 + index} label={e} />
          ))}
          <TreeItem
            onClick={() => setList([...list, "Feed"])}
            nodeId={list.length + 12}
            label="add Feed"
          />
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default Nav;
