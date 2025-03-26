/*--- 系統類型的專案 ---*/
const system_projects = [
    {
        link: "https://www.youtube.com/watch?v=DjpL0Ds6UfQ", // 專案連結
        img: "./asset/system-project.png", // 專案圖片
        tools: ["Java", "Android Studio", "MySQL"], // 專案使用到的技術
        project_portfolio: "大學專題", // 作品資料
        project_type: "APP", // 作品類型
        name: "The Crowd 人流管理與推播系統", // 專案名稱
        description: "影像辨識 | 人流擁擠程度 | 推薦最佳路線 | 智慧導覽服務", // 專案介紹
        year: "2023" // 年度
    },
    {
        link: null, // 專案連結
        img: "./asset/system-project1.png", // 專案圖片
        tools: ["Python", "MySQL"], // 專案使用到的技術
        project_portfolio: "委託(不公開)", // 作品資料
        project_type: "資料庫系統", // 作品類型
        name: "保安宮信徒管理系統", // 專案名稱
        description: "管理信徒資料 | 查詢 | 列印套版。", // 專案介紹
        year: "2023" // 年度
    },
    {
        link: "https://github.com/bf-yao/Taipei-City-YouBike2.0", // 專案連結
        img: "./asset/system-project2.png", // 專案圖片
        tools: ["Python", "Open Street Map"], // 專案使用到的技術
        project_portfolio: "期末小專題", // 作品資料
        project_type: "查詢系統", // 作品類型
        name: "臺北市Youbike即時查詢系統", // 專案名稱
        description: "可以查詢臺北市Youbike 2.0的即時站點資訊。", // 專案介紹
        year: "2023" // 年度
    },
    {
        link: "https://www.youtube.com/watch?v=iPNcnJ8afHE", // 專案連結
        img: "./asset/system-project3.png", // 專案圖片
        tools: ["Python", "PostgreSQL"], // 專案使用到的技術
        project_portfolio: "期中小專題", // 作品資料
        project_type: "資料庫系統", // 作品類型
        name: "中山租車", // 專案名稱
        description: "使用者可以選擇特定時間以預定車款，管理者有管理介面可以編輯相關資訊。", // 專案介紹
        year: "2024" // 年度
    }
]

let html_system = "";

for (let i = 0; i < system_projects.length; i++) {
    let project_tools_system = ""; // 專案使用到的技術
    // 跑專案使用到的技術，把他們分成很多個膠囊顯示在project的框框內
    for (let j = 0; j < system_projects[i].tools.length; j++) {
        project_tools_system += `
            <span class="badge badge-pill badge-light mr-2">${system_projects[i].tools[j]}</span>
        `;
    }

    // 主要顯示作品的框框
    html_system += `
        <div class="col-lg-4">
            <div class="position-relative">
                <div class="project-block">
                    <a href="${system_projects[i].link}" target="_blank">
                        <img src="${system_projects[i].img}" class="img-fluid">
                    </a>

                    <!-- 使用到的技術 -->
                    <div class="project-use-skill">
                        ${project_tools_system}
                    </div>

                    <!-- 作品資料 -->
                    <span class="badge badge-dark project-portfolio">${system_projects[i].project_portfolio}</span>
                    <!-- 作品類型 -->
                    <span class="badge project-type"
                        style="background-color: #87a96b; color: #fff;">${system_projects[i].project_type}</span>

                    <div class="project-description pt-2 text-center">
                        <h4>${system_projects[i].name}</h4>
                        <h5>${system_projects[i].description}</h5>
                        <h5>${system_projects[i].year}</h5>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.getElementById("system").querySelector(".project").innerHTML = html_system;
