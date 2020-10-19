var player = ['Trae Young (ATL)', 'Jayson Tatum (BOS)', 'Joe Harris (BRK)', 'Devonte Graham (CHA)', 'Zach LaVine (CHI)', 'Kevin Love (CLE)', 'Tim Hardaway Jr. (DAL)', 'Jamal Murray (DEN)', 'Langston Galloway (DET)', 'Andrew Wiggins (GSW)', 'James Harden (HOU)', 'Justin Holiday (IND)', 'Marcus Morris (LAC)', 'LeBron James (LAL)', 'Dillon Brooks (MEM)', 'Duncan Robinson (MIA)', 'Khris Middleton (MIL)', 'Karl-Anthony Town (MIN)', 'J.J. Redick (NOP)', 'Bobby Portis (NYK)', 'Danilo Gallinari (OKC)', 'Terrence Ross (ORL)', 'Furkan Korkmaz (PHI)', 'Devin Booker (PHX)', 'Damian Lillard (POR)', 'Buddy Hield (SAC)', 'Patty Mills (SAS)', 'Pascal Siakam (TOR)', 'Bojan Bogdanovic (UTA)', 'Davis Bertans (WAS)',];

var made = [205, 189, 172, 218, 184, 146, 204, 112, 132, 111, 299, 134, 142, 148, 147, 270, 147, 114, 180, 67, 178, 177, 143, 141, 270, 271, 154, 131, 189, 200];

var attempt = [568, 469, 406, 585, 484, 390, 513, 324, 331, 334, 843, 331, 348, 425, 411, 606, 354, 277, 397, 187, 439, 504, 356, 398, 674, 688, 403, 365, 457, 472];

var trace1 = {
  type: 'scatter',
  x: made,
  y: player,
  mode: 'markers',
  name: 'Made 3 pointers',
  marker: {
    color: 'rgba(0,0,255)',
    line: {
      color: 'rgba(0,0,0)',
      width: 3,
    },
    symbol: 'circle',
    size: 20
  }
};

var trace2 = {
  x: attempt,
  y: player,
  mode: 'markers',
  name: 'Attempted 3 pointers',
  marker: {
    color: 'rgba(255,165,0)',
    line: {
      color: 'rgba(0,0,0)',
      width: 3,
    },
    symbol: 'circle',
    size: 20
  }
};

var data = [trace1, trace2];

var layout = {
  title: 'Most 3 Pointers Made and Attempted From Each Franchise (2019-2020 Season)',
  xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(0, 0, 0,)',
    titlefont: {
      font: {
        color: 'rgb(0, 0, 0,)'
      }
    },
    tickfont: {
      font: {
        color: 'rgb(0, 0, 0,)'
      }
    },
    autotick: false,
    dtick: 10,
    ticks: 'outside',
    tickcolor: 'rgb(0, 0, 0)'
  },
  margin: {
    l: 140,
    r: 40,
    b: 50,
    t: 80
  },
  legend: {
    font: {
      size: 10,
    },
    yanchor: 'middle',
    xanchor: 'right'
  },
  width: 1600,
  height: 900,
  paper_bgcolor: 'rgb(255,255,255)',
  plot_bgcolor: 'rgb(255,255,255)',
  hovermode: 'closest'
};

Plotly.newPlot('tester', data, layout);