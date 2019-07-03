let GreenFoxAcademy: any = {
    floors: 3,
    location: 'Andrassy 66',
    coffeemachines: 8,
    girls: 10,
    isNice: true,
      mentors: [
        'Agi', 'Csaba', 'Mark'
      ]
  
  };
  
  
  //console.log(GreenFoxAcademy);
  
  GreenFoxAcademy['isNice'] = false;
  
  //console.log(GreenFoxAcademy);
  
  let thisCohort: any = {
    students: 20,
    windows: 5,
    door: 1
  }
  
  let drawers: any = {
    rows: 5,
    columns: 5,
    colors: ['green', 'white', 'black']
  } 
  
  GreenFoxAcademy['cohort'] = thisCohort;
  
  //console.log(GreenFoxAcademy);
  
  thisCohort['drawers'] = drawers;
  
  console.log(GreenFoxAcademy.cohort.drawers.colors);
  
  GreenFoxAcademy.cohort.drawers.colors[2] = 'red';
  
  console.log(GreenFoxAcademy.cohort.drawers.colors);
  
  Collapse
  
  
  
  Message Input
  
  
  Message Balint Haui