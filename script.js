(function () {
var A=["AetherAnalytics (a CSV-to-dashboard analytics app with an ML playground), MessWise (predicts hostel meal headcount to cut food waste) and a web analytics platform with an embeddable tracker.","Three internships: ScholarX (2026), CADD Expert Solutions (2025) and Techsnapie Solutions (2024). I worked with React, Node.js, REST APIs and Git in team workflows.","React, Node.js, Express and MongoDB for full-stack apps, plus Python, Flask and scikit-learn for the ML parts.","I finish what I build: three working full-stack projects, three internships and a 9.10 CGPA. I am looking for a Full Stack or Frontend internship."];
var ans=document.getElementById('ans'),chipBtns=document.querySelectorAll('.ask button');
function show(k){ans.textContent=A[k];chipBtns.forEach(function(b){b.classList.toggle('on',b.dataset.k==k)})}
chipBtns.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.k)})});
show(0);
var t=document.getElementById('theme');
t.addEventListener('click',function(){
var r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
r.dataset.theme=dark?'light':'dark';
});
})();
