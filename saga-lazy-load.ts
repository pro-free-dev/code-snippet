const ROUTER={
  Home:'Home',
  List:'List',
  OrderDetail:'OrderDetail',
  Default:'*'
  }
  
  const SAGA = {
    Home:'Home',
    Saseme:'Home',
    List:'Home',
    Product:'Home',
    OrderDetail:'Home',
  }

  const sagaRoute={
    [ROUTER.Home]:[SAGA.Home,SAGA.Saseme,SAGA.Product],
    [ROUTER.List]:[SAGA.Home,SAGA.Saseme,SAGA.Product],
    [ROUTER.OrderDetail]:[SAGA.Home,SAGA.Saseme,SAGA.Product],
  }

  function loadSagaSource(route){
    const source=route===ROUTER.Default?Object.keys(SAGA):sagaRoute[route];

  return  source.map(saga=>require(saga.indexOf()?saga:`/{saga}/`));
  }

  function getSagas(){
  const first=  loadSagaSource(ROUTER.Default);
  runSaga(first);
  
  const second= loadSagaSource(ROUTER.Default).filter(x => !first.includes(x))
  runSaga(second);
  }
