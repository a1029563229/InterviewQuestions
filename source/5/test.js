const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.resolvedHandlers = [];
    this.rejectedHandlers = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
    return this;
  }

  resolve(props) {
    setTimeout(() => {
      this.state = RESOLVED;
      const resolveHandler = this.resolvedHandlers.shift();
      if (!resolveHandler) return;

      const result = resolveHandler(props);
      if (result && result instanceof MyPromise) {
        result.then(...this.resolvedHandlers);
      }
    });
  }

  reject(error) {
    setTimeout(() => {
      this.state = REJECTED;
      const rejectHandler = this.rejectedHandlers.shift();
      if (!rejectHandler) return;

      const result = rejectHandler(error);
      if (result && result instanceof MyPromise) {
        result.catch(...this.rejectedHandlers);
      }
    });
  }

  then(...handlers) {
    this.resolvedHandlers = [...this.resolvedHandlers, ...handlers];
    return this;
  }

  catch(...handlers) {
    this.rejectedHandlers = [...this.rejectedHandlers, ...handlers];
    return this;
  }
}

MyPromise.all = function (promises) {
  return new MyPromise((resolve, reject) => {
    const results = [];
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise.then(res => {
        results.push(res);
        if (results.length === promises.length) resolve(results);
      }).catch(reject);
    }
  });
}

MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise.then(resolve).catch(reject);
    }
  });
}

new MyPromise(resolve => {
  console.log("start");
  resolve("resolve1");
  console.log("end");
}).then(msg => {
  console.log(msg);
  return new MyPromise(resolve => resolve("resolve2"));
}).then(msg => {
  console.log(msg);
  return new MyPromise(resolve => resolve("resolve3"));
}).then(console.log)

const promise1 = new MyPromise(resolve => {
  setTimeout(() => resolve("promise1 resolved"), 500);
});

const promise2 = new MyPromise(resolve => {
  setTimeout(() => resolve("promise2 resolved"), 1000);
});

const promise3 = new MyPromise(resolve => {
  setTimeout(() => resolve("promise3 resolved"), 3000);
});

MyPromise.all([promise1, promise2, promise3]).then(console.log);
MyPromise.race([promise1, promise2, promise3]).then(console.log);