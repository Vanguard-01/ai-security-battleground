// src/lib/progress.js
export function loadProgress(){ return JSON.parse(localStorage.getItem('prog')||'{}') }
export function saveProgress(p){ localStorage.setItem('prog', JSON.stringify(p)) }

