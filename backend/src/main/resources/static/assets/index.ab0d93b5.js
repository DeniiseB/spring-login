import{j as d,L as p,u as g,r as l,B as m,R as f,a as y,b as w}from"./vendor.b55e5d63.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};x();const o=d.exports.jsx,i=d.exports.jsxs;function v(){return i("nav",{children:[o(p,{to:"/",children:"Home"}),o(p,{to:"/login",children:"Login"}),o("p",{onClick:()=>fetch("/logout"),children:"Logout"})]})}function b(){const s=g();async function n(){let r=await fetch("/greet");console.log(await r.text()),r.status==403&&s.push("/login")}return i("div",{children:[o("h1",{children:"Home"}),o("button",{onClick:n,children:"Greeting"})]})}function L(){const[s,n]=l.exports.useState(""),[r,c]=l.exports.useState("");async function e(t){t.preventDefault();const a={username:s,password:r};let u=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),h=await u.json();console.log(h),u.status==403&&console.log("Wrong username/password")}return i("div",{children:[o("h1",{children:"Login"}),i("form",{onSubmit:e,children:[o("input",{type:"text",placeholder:"username",value:s,onChange:t=>n(t.target.value)}),o("input",{type:"password",placeholder:"password",value:r,onChange:t=>c(t.target.value)}),o("br",{}),o("button",{children:"login"})]})]})}function j(){l.exports.useEffect(()=>{s()},[]);async function s(){let n=await fetch("/api/whoami");try{let r=await n.json();console.log(r)}catch{console.log("Not logged in")}}return i(m,{className:"App",children:[o(v,{}),i("main",{children:[o(f,{path:"/",exact:!0,component:b}),o(f,{path:"/login",exact:!0,component:L})]})]})}y.render(o(w.StrictMode,{children:o(j,{})}),document.getElementById("root"));
