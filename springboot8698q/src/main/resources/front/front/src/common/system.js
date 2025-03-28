export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"报道流程","menuJump":"列表","tableName":"baodaoliucheng"}],"menu":"报道流程管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除","班级分配","宿舍分配"],"menu":"学生报到","menuJump":"列表","tableName":"xueshengbaodao"}],"menu":"学生报到管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除","新增"],"menu":"班级分配","menuJump":"列表","tableName":"banjifenpei"}],"menu":"班级分配管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","删除","新增"],"menu":"宿舍分配","menuJump":"列表","tableName":"sushefenpei"}],"menu":"宿舍分配管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"缴费信息","menuJump":"列表","tableName":"jiaofeixinxi"}],"menu":"缴费信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"学生信息","menuJump":"列表","tableName":"xueshengxinxi"}],"menu":"学生信息管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"班级信息","menuJump":"列表","tableName":"banjixinxi"}],"menu":"班级信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"宿舍信息","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"校园公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看"],"menu":"报道流程列表","menuJump":"列表","tableName":"baodaoliucheng"}],"menu":"报道流程模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看"],"menu":"学生报到","menuJump":"列表","tableName":"xueshengbaodao"}],"menu":"学生报到管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"班级分配","menuJump":"列表","tableName":"banjifenpei"}],"menu":"班级分配管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"宿舍分配","menuJump":"列表","tableName":"sushefenpei"}],"menu":"宿舍分配管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","支付"],"menu":"缴费信息","menuJump":"列表","tableName":"jiaofeixinxi"}],"menu":"缴费信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看"],"menu":"报道流程列表","menuJump":"列表","tableName":"baodaoliucheng"}],"menu":"报道流程模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
