
          let __output = [];
          const originalLog = console.log;
          console.log = (...args) => {
            __output.push(args.join(' '));
            originalLog(...args);
          };
          
          function check(a){
  if(a>0){
    console.log("Positive")
  }else if(a===0){
    console.log("Zero")
  }else if(a<0){
    console.log("Nagative")
  }else{
    console.log("Not match")
  }
}
check(-3)
check(0)
          
          // Print only the last output for test case comparison
          if (__output.length > 0) {
            process.stdout.write(__output[__output.length - 1]);
          }
        