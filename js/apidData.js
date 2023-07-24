console.log("공공데이터");
fetch(
    "https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?page=1&perPage=1400&serviceKey=DaSJL1Z6JhR606nB57liPfY%2BrpBJaFLePHKyJg140uX2L3t9lCXYmigD%2FXzGfaqMxiSfPQy5naMuxdcqES6vyA%3D%3D"
)
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem("addressArray", JSON.stringify(data));
        console.log(data);
    });
