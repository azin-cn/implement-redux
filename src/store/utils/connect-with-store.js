import React, { useReducer } from "react";
import { useEffect } from "react";
import store from "..";


export function connect(mapStateToProps, mapDispatchToProps) {
  return function EnhanceWrapper(Wrapper) { // 增强传入的普通组件。使用的是函数式组件
    return function HOC() {

      const  [, forceUpdate] = useReducer( x => x+1, 0)

      
      useEffect(()=>{

        const unmount = store.subscribe(() => {
          forceUpdate()
        })
        
        return () => { // 返回值起到componentWillUnMount()的作用
          unmount()
        }
      }, [])

      const state = store.getState()

      /* 函数式组件Wrapper本身的props并未传入 */
      return (
        <Wrapper 
          {...mapStateToProps(state)}
          {...mapDispatchToProps(store.dispatch)}
        />
      )
    }
  }
}

// connect-with-store
// 正常使用即可，如果需要与store对象分离，那么使用connect即可，差别在于是否分离store对象，即设置/使用context
// connect
// 在使用时，需要将入口文件即App渲染处的外层包裹StoreContext的标签