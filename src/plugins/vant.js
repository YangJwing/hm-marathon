/*
 * @作者: Edwin Yeung
 * @Date: 2021-05-25 16:12:18
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-06 00:32:31
 * @描述: 
 */
import Vue from 'vue'
import { List, PullRefresh, Cell, CellGroup,Tab, Tabs, Col, Row, Image as VanImage, Loading, Swipe, SwipeItem, Lazyload, Toast, NavBar, Field, Uploader, Button, Icon, Popup, Rate, Form, Checkbox, CheckboxGroup, Search, DropdownMenu, DropdownItem, Tag, Area ,IndexBar, IndexAnchor,Collapse, CollapseItem, Skeleton,  Dialog, Circle, Overlay,RadioGroup, Radio, Card,ActionSheet,Tabbar,TabbarItem,Empty,Divider,NumberKeyboard  } from 'vant'
import 'vant/lib/index.css'
import {areaList} from '@vant/area-data'


Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Loading);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Rate);
Vue.use(Form);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Search);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tag);
Vue.use(Area);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Skeleton);
Vue.use(Empty);
Vue.use(Circle);
Vue.use(Overlay);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Card);
Vue.use(ActionSheet);

Vue.use(Dialog);
Vue.use(Lazyload);
Vue.use(Toast);

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(Divider);
Vue.use(NumberKeyboard );