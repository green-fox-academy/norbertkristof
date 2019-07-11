class Cookie {
    shape: string;
    hasSparkles: boolean;
    flavor: string;
    id: number;
    static lastId: number = 1;
    private status: string = 'raw';
    static isYummy: boolean = true;
  
    bakeMe(){
      this.status = 'baked to perfection 🔥';
    }
  
    checkMyStatus(){
      return this.status;
    }
  
    static howAreYouToday(mood:string){
      return `I am doing ${mood}`;
    }
  
    constructor(shape:string, hasSparkles: boolean, flavor?: string){
      this.shape = shape;
      this.hasSparkles = hasSparkles;
      this.flavor = flavor;
      this.id = Cookie.lastId;
      Cookie.lastId++;
    }
  }
  
  let myFirstCookie: Cookie = new Cookie('elephant', false);
  let mySecondCookie: Cookie = new Cookie('spider', true, 'chocolate');
  myFirstCookie.bakeMe();
  console.log(Cookie.howAreYouToday('exceptional'));
  console.log(myFirstCookie);
  console.log(mySecondCookie);
  
  Math.random();
  Math.PI;
  
  export default Cookie;