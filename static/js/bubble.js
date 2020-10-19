var trace1 = {
    x: ['ATL', 'BOS', 'BRK', 'CHA', 'CHI', 'CLE', 'DAL', 'DEN', 'DET', 'GSW', 'HOU', 'IND', 'LAC', 'LAL', 'MEM', 'MIA', 'MIL', 'MIN', 'NOP', 'NYK', 'OKC', 'ORL', 'PHI', 'PHX', 'POR', 'SAC', 'SAS', 'TOR', 'UTA', 'WAS',],
    y: [682, 862, 580, 688, 652, 615, 1043, 694, 576, 394, 1028, 684, 750, 756, 621, 1008, 1023, 372, 902, 400, 649, 756, 880, 674, 895, 881, 739, 844, 870, 721],
    text: ['3PM<br>Team: ATL', '3PM<br>Team: BOS', '3PM<br>Team: BRK', '3PM<br>Team: CHA', '3PM<br>Team: CHI','3PM<br>Team: CLE','3PM<br>Team: DAL', '3PM<br>size: DEN', '3PM<br>Team: DET', '3PM<br>Team: GSW', '3PM<br>Team: HOU','3PM<br>Team: IND','3PM<br>Team: LAC','3PM<br>Team: LAL', '3PM<br>Team: MEM', '3PM<br>Team: MIA', '3PM<br>Team: MIL', '3PM<br>Team: MIN','3PM<br>Team: NOP', '3PM<br>Team: NYK', '3PM<br>Team: OKC', '3PM<br>Team: ORL', '3PM<br>Team: PHI', '3PM<br>Team: PHX','3PM<br>Team: POR','3PM<br>Team: SAC', '3PM<br>Team: SAS', '3PM<br>Team: TOR', '3PM<br>Team: UTA', '3PM<br>Team: WAS','3PM<br>size: 40',],
    mode: 'markers', 
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(0,255,255)', 'rgb(0,0,255)', 'rgb(138,43,226)', 'rgb(222,184,135)', 'rgb(127,255,0)','rgb(255,127,80)', 'rgb(100,149,237)', 'rgb(220,20,60)', 'rgb(0,255,255)', 'rgb(0,0,139)','rgb(0,139,139)', 'rgb(184,134,11)', 'rgb(0,100,0)', 'rgb(139,0,139)', 'rgb(255,140,0)','rgb(139,0,0)', 'rgb(233,150,122)', 'rgb(0,206,209)', 'rgb(148,0,211)', 'rgb(255,20,147)','rgb(0,191,255)', 'rgb(30,144,255)', 'rgb(178,34,34)', 'rgb(34,139,34)', 'rgb(75,0,130)','rgb(124,252,0)', 'rgb(32,178,170)',],
      size: [40, 50, 40, 40 , 40, 40, 80, 40, 40, 40, 70, 40, 40, 40, 40, 60, 65, 40, 50, 40 , 40, 40 , 50, 40, 50, 50, 40, 50, 50, 40,]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Total Team 3PM Per Franchise (2019-2020, Regular Season)',
    showlegend: false,
    height: 600,
    width: 1600
  };
  
  Plotly.newPlot('tester', data, layout);