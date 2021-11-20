import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MoreOptions from "../components/MoreOptions";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});
function Category (){
    const classes = useStyles();
    const [state, setState] = useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <MoreOptions></MoreOptions>
        </List>
        
      </div>
    );
  
    return (
      <>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <AccountCircleIcon onClick={toggleDrawer(anchor, true)} style={{fontSize : '1.8rem'}} id="more"></AccountCircleIcon>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </>
    );
}
export default Category;