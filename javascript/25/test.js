class LazyManClass {
  constructor(name) {
    this.name = name;
    this.fns = [];
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.next();
    });
    return this
  }

  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next();
      }, time * 1000)
    }
    this.fns.push(fn);
    return this;
  }

  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next();
      }, time * 1000)
    }
    this.fns.unshift(fn);
    return this;
  }

  eat(food) {
    const fn = () => {
      console.log(`I am eating ${food}`);
      this.next();
    }
    this.fns.push(fn);
    return this;
  }

  next() {
    const fn = this.fns.shift();
    fn && fn();
  }
}

const LazyMan = (name) => {
  return new LazyManClass(name);
}

// LazyMan('Tony');
// Hi I am Tony

// LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food