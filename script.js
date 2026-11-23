document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var v=function(i){return document.getElementById(i).value.trim()};
var t='Hello Ashirbad Girls’ House PG, I’d like to enquire about a room.\n\nName: '+v('n')+'\nContact: '+(v('c')||'—')+'\nPreferred sharing: '+v('s')+'\nMove-in date: '+(v('d')||'Not decided')+'\nNotes: '+(v('m')||'—');
window.open('https://wa.me/916291602241?text='+encodeURIComponent(t),'_blank');});
