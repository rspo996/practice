console.log("OO초등학교 1학년 1반 성적");
const grades = [
	[ "kim" , { "math" : 90, "korean" : 80, "english" : 90} ],
	[ "song" , { "math" : 50, "korean" : 40, "english" : 60} ],
	[ "lee" , { "math" : 70, "korean" : 80, "english" : 70} ]
]
const subjectName = ["math","korean","english"];
let avgArr = [];
let sumArr = [];
let sumVal = 0;
for(let i=0; i<grades.length; i++){
	sumVal = 0;
	for(let j=0; j<subjectName.length; j++){
		let sum = grades[i][1][`${subjectName[j]}`];
		sumVal += sum;
	}
	let avgVal = sumVal / subjectName.length;
	console.log(`이름: ${grades[i][0]}, 합계: ${sumVal}, 평균: ${avgVal} `);
}
