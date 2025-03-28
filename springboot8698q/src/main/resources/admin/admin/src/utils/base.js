const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot8698q/",
            name: "springboot8698q",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot8698q/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学新生报到系统的设计与实现"
        } 
    }
}
export default base
