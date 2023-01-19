var MainPoint,
    k1hall001, k1hall002,
    k1e1point001, k1e1point002,
    k1e2point001,
    k1e3point001, k1e3point002, k1e3pointMITS,
    k1e4point001, k1e4point002, k1e4point003,
    perehod001,
    k2e1point001, k2e1point002,
    k2e2point001,
    k2e3point001,
    k2e4point001,
    PointViewer;

MainPoint = new PANOLENS.ImagePanorama( 'images/main_point.png' );

k1hall001 = new PANOLENS.ImagePanorama( 'images/k1hall001.jpg' );
k1hall002 = new PANOLENS.ImagePanorama( 'images/k1hall002.jpg' );

k1e1point001 = new PANOLENS.ImagePanorama( 'images/k1e1point001.jpg' );
k1e1point002 = new PANOLENS.ImagePanorama( 'images/k1e1point002.jpg' );

k1e2point001 = new PANOLENS.ImagePanorama( 'images/k1e2point001.jpg' );

k1e3point001 = new PANOLENS.ImagePanorama( 'images/k1e3point001.jpg' );
k1e3point002 = new PANOLENS.ImagePanorama( 'images/k1e3point002.jpg' );
k1e3pointMITS = new PANOLENS.ImagePanorama( 'images/k1e3pointMITS.jpg' );

k1e4point001 = new PANOLENS.ImagePanorama( 'images/k1e4point001.jpg' );
k1e4point002 = new PANOLENS.ImagePanorama( 'images/k1e4point002.jpg' );
k1e4point003 = new PANOLENS.ImagePanorama( 'images/k1e4point003.jpg' );

perehod001 = new PANOLENS.ImagePanorama( 'images/perehod001.jpg' );

k2e1point001 = new PANOLENS.ImagePanorama( 'images/k2e1point001.jpg' );
k2e1point002 = new PANOLENS.ImagePanorama( 'images/k2e1point002.jpg' );

k2e2point001 = new PANOLENS.ImagePanorama( 'images/k2e2point001.jpg' );

k2e3point001 = new PANOLENS.ImagePanorama( 'images/k2e3point001.jpg' );

k2e4point001 = new PANOLENS.ImagePanorama( 'images/k2e4point001.jpg' );

PointViewer = new PANOLENS.Viewer({
    autoRotate: true,
    autoRotateSpeed: -0.2,
    output: 'console'
});


PointViewer.add( MainPoint );
PointViewer.add( k1hall001, k1hall002 );
PointViewer.add( k1e1point001, k1e1point002 );
PointViewer.add( k1e2point001 );
PointViewer.add( k1e3point001, k1e3point002 );
PointViewer.add( k1e4point001, k1e4point002, k1e4point003 );
PointViewer.add( perehod001 );
PointViewer.add( k1e3pointMITS );
PointViewer.add( k2e1point001, k2e1point002 );
PointViewer.add( k2e2point001 );
PointViewer.add( k2e3point001 );
PointViewer.add( k2e4point001 );


/* Переход из стартовой точки в холл*/
MainPoint.link( k1hall001, new THREE.Vector3( 4014.21, -2977.08, -15.30 ) );

/* Переход из точки холла*/
k1hall001.link( k1e1point001, new THREE.Vector3( -4321.73, 149.68, -2502.14) );
k1hall001.link( k1hall002, new THREE.Vector3( 789.11, -51.31, -4928.37 ) );

/*  точка возле спортзала  */
k1hall002.link( k1hall001, new THREE.Vector3( 4328.90, -31.27, 2499.64 ) );
k1hall002.link( perehod001, new THREE.Vector3( -4234.64, -150.57, -2636.19 ) );

/*  переход  01 */
perehod001.link( k1hall002, new THREE.Vector3( -4442.56, 39.73, 2275.91 ) );
perehod001.link( k2e1point001, new THREE.Vector3( 4037.86, 71.67, -2943.37 ) );



/* точка возле 101 кабинета*/
k1e1point001.link( k1e1point002, new THREE.Vector3(  -4955.02, -274.22, -564.90 ) );
k1e1point001.link( k1e2point001, new THREE.Vector3(   2248.43, 788.18, -4387.97 ) );
k1e1point001.link( k1hall001, new THREE.Vector3( 3144.96, -786.02, 3798.15 ) );

/*  точка возле деканата 115  */
k1e1point002.link( k1e1point001, new THREE.Vector3( 4989.82, 224.38, -25.94 ) );



/*переход со второго этажа*/
k1e2point001.link( k1e3point001, new THREE.Vector3( -1646.45, 285.90, 4704.36) );
k1e2point001.link( k1e1point001, new THREE.Vector3( 255.46, -789.47, 4923.60 ) );


/*переход с третьего этажа*/
k1e3point001.link( k1e4point001, new THREE.Vector3( -410.61, 1127.18, 4848.30 ) );
k1e3point001.link( k1e2point001, new THREE.Vector3( 1981.93, -319.19, 4574.18 ) );
k1e3point001.link( k1e3point002, new THREE.Vector3( 4976.88, -61.82, 394.90 ) );

/*переход с точки возле МИЦ*/
k1e3point002.link( k1e3pointMITS, new THREE.Vector3( 4024.05, -542.42, 2910.48 ) );
k1e3point002.link( k1e3point001, new THREE.Vector3( -2810.26, 17.18, 4127.84 ) );



/*переход с четвертого этажа*/
k1e4point001.link( k1e3point001, new THREE.Vector3( -4959.98, -461.59, -312.99 ) );
k1e4point001.link( k1e4point002, new THREE.Vector3( 2625.85, -237.20, -4237.30 ) );
k1e4point001.link( k1e4point003, new THREE.Vector3( -2424.49, 89.88, 4364.64 ) );

/*переход от 429*/
k1e4point002.link( k1e4point001, new THREE.Vector3( -2825.00, 87.47, 4114.98 ) );

/*переход от 408*/


/*  первый этаж лабораторного корпуса возле перехода */
k2e1point001.link( k2e1point002, new THREE.Vector3( 503.94, -139.24, -4968.12 ) );

/*  первый этаж возле вахты  */
k2e1point002.link( k2e1point001, new THREE.Vector3( -2317.84, 276.93, 4410.75 ) );
k2e1point002.link( k2e2point001, new THREE.Vector3( -4296.41, 1272.68, -2196.86 ) );

/*  второй этаж лабораторного корпуса  */
k2e2point001.link( k2e1point002, new THREE.Vector3( 2907.43, -686.70, -4005.69 ) );
k2e2point001.link( k2e3point001, new THREE.Vector3( 3973.04, 670.00, -2951.28 ) );

/* третий этаж лабораторного корпуса  */
k2e3point001.link( k2e2point001, new THREE.Vector3( 4868.04, -562.81, 955.67 ) );
k2e3point001.link( k2e4point001, new THREE.Vector3( 4323.12, 827.11, 2358.69 ) );

/* четвертый этаж лабораторного корпуса  */
k2e4point001.link( k2e3point001, new THREE.Vector3( -3633.93, -568.82, 3376.17 ) );







