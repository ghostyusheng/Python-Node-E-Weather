import * as THREE from 'three';

			import { TWEEN } from 'https://cdn.jsdelivr.net/npm/three@0.142.0/examples/jsm/libs/tween.module.min.js';
			import { TrackballControls } from 'https://cdn.jsdelivr.net/npm/three@0.142.0/examples/jsm/controls/TrackballControls.js';
			import { CSS3DRenderer, CSS3DObject } from 'https://cdn.jsdelivr.net/npm/three@0.142.0/examples/jsm/renderers/CSS3DRenderer.js';

			const tablePositionArr = JSON.parse("[[3,6],[3,3],[11,3],[12,3],[5,3],[6,3],[7,3],[8,3],[10,3],[9,3],[1,3],[2,3],[13,3],[14,3],[15,3],[16,3],[17,3],[18,3],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[13,4],[14,4],[15,4],[16,4],[17,4],[18,4],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5],[18,5],[1,6],[2,6],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9],[14,9],[15,9],[16,9],[3,7],[3,9],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[18,6],[1,7],[2,7],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10],[16,10],[4,3],[3,10],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[17,7],[18,7]]")

			const table = [{"skill":"C","star":"**","company":1,"learning":1},
			{"skill":"C++","star":"*","company":0,"learning":1},
			{"skill":"C#","star":"**","company":0,"learning":1},
			{"skill":"C#.NET","star":"**","company":0,"learning":1},
			{"skill":"ASP.NET","star":"**","company":0,"learning":1},
			{"skill":"WPF","star":"***","company":0,"learning":1},
			{},
			
			{"skill":"Game Unity","star":"*","company":0,"learning":0},
			{"skill":"Game Cocos2d JS","star":"***","company":0,"learning":1},
			{"skill":"Game Egret","star":"*","company":1,"learning":1},
			{},
			
			{"skill":"Python","star":"****","company":1,"learning":1},
			{"skill":"Flask","star":"****","company":1,"learning":1},
			{"skill":"Tornado","star":"****","company":1,"learning":1},
			{"skill":"Django","star":"****","company":1,"learning":1},
			{"skill":"Scrapy","star":"****","company":1,"learning":1},
			{"skill":"Selenium","star":"****","company":1,"learning":1},
			{"skill":"Tensorflow","star":"*","company":0,"learning":0},
			{"skill":"Sklearn","star":"****","company":1,"learning":1},
			{"skill":"Pandas","star":"****","company":1,"learning":1},
			{"skill":"Numpy","star":"****","company":1,"learning":1},
			{},
			
			{"skill":"PHP","star":"****","company":1,"learning":1},
			{"skill":"Laravel","star":"****","company":1,"learning":1},
			{"skill":"ThinkPHP","star":"****","company":1,"learning":1},
			{"skill":"CMS","star":"****","company":1,"learning":1},
			{"skill":"Wordpress","star":"****","company":1,"learning":1},
			{},
			
			{"skill":"Java","star":"***","company":1,"learning":1},
			{"skill":"Scala","star":"***","company":1,"learning":1},
			{"skill":"Spring Boot","star":"***","company":1,"learning":1},
			{"skill":"Gradle","star":"***","company":1,"learning":1},
			{"skill":"Maven","star":"***","company":1,"learning":1},
			{"skill":"Tomcat","star":"***","company":1,"learning":1},
			{"skill":"Jetty","star":"***","company":1,"learning":1},
			{"skill":"Netty","star":"***","company":1,"learning":1},
			{"skill":"Android","star":"*","company":0,"learning":0},
			{"skill":"Swift","star":"*","company":0,"learning":0},
			{"skill":"OC","star":"*","company":0,"learning":0},
			{"skill":"Flutter","star":"*","company":0,"learning":0},
			{"skill":"Ionic","star":"*","company":0,"learning":1},
			{},
			
			{"skill":"NodeJS","star":"****","company":1,"learning":1},
			{"skill":"Express","star":"****","company":1,"learning":1},
			{"skill":"PhantomJS","star":"****","company":1,"learning":1},
			{"skill":"Javascript(ES5,ES6)","star":"****","company":1,"learning":1},
			{"skill":"React","star":"****","company":1,"learning":1},
			{"skill":"Angular","star":"****","company":1,"learning":1},
			{"skill":"Vue","star":"**","company":0,"learning":1},
			{"skill":"Jquery","star":"****","company":1,"learning":1},
			{"skill":"HTML5","star":"****","company":1,"learning":1},
			{"skill":"CSS3","star":"****","company":1,"learning":1},
			{"skill":"Gulp","star":"****","company":1,"learning":1},
			{"skill":"Webpack","star":"****","company":1,"learning":1},
			{"skill":"Yarn","star":"****","company":1,"learning":1},
			{"skill":"Npm","star":"****","company":1,"learning":1},
			{},
			
			{"skill":"Golang","star":"**","company":1,"learning":1},
			{"skill":"Gin","star":"****","company":1,"learning":1},
			{},
			
			{"skill":"Ruby","star":"**","company":1,"learning":1},
			{"skill":"Lisp","star":"**","company":0,"learning":1},
			{"skill":"IDL","star":"***","company":1,"learning":1},
			{},
			
			{"skill":"Mysql","star":"****","company":1,"learning":1},
			{"skill":"Mongo","star":"****","company":1,"learning":1},
			{"skill":"Sql Server","star":"****","company":1,"learning":1},
			{"skill":"Postgre","star":"****","company":1,"learning":1},
			{"skill":"Neo4J","star":"***","company":1,"learning":1},
			{},
			
			{"skill":"Linux","star":"****","company":1,"learning":1},
			{"skill":"Shell","star":"****","company":1,"learning":1},
			{"skill":"CICD","star":"****","company":1,"learning":1},
			{"skill":"Jenkins","star":"****","company":1,"learning":1},
			{"skill":"DevOps","star":"****","company":1,"learning":1},
			{"skill":"Terraform","star":"****","company":1,"learning":1},
			{"skill":"Prometheus","star":"****","company":1,"learning":1},
			{"skill":"Grafana","star":"****","company":1,"learning":1},
			{"skill":"Kubernate","star":"****","company":1,"learning":1},
			{"skill":"Docker","star":"****","company":1,"learning":1},
			{"skill":"Ansible","star":"****","company":1,"learning":1},
			{"skill":"Airflow","star":"****","company":1,"learning":1},
			{"skill":"Haproxy","star":"****","company":1,"learning":1},
			{"skill":"Nginx","star":"****","company":1,"learning":1},
			{"skill":"Apache","star":"****","company":1,"learning":1},
			{"skill":"ELK(Elastic Search)","star":"****","company":1,"learning":1},
			{"skill":"Redis","star":"****","company":1,"learning":1},
			{"skill":"Memcached","star":"****","company":1,"learning":1},
			{"skill":"Kafka","star":"****","company":1,"learning":1},
			{"skill":"Rocket MQ","star":"****","company":1,"learning":1},
			{"skill":"Beanstalk","star":"****","company":1,"learning":1},
			{},
			
			{"skill":"Big data","star":"****","company":1,"learning":1},
			{"skill":"Search Engine","star":"****","company":1,"learning":1},
			{"skill":"Hadoop","star":"****","company":1,"learning":1},
			{"skill":"Hive","star":"****","company":1,"learning":1},
			{"skill":"Hbase","star":"****","company":1,"learning":1},
			{"skill":"Spark","star":"****","company":1,"learning":1},
			{"skill":"Spark streaming","star":"****","company":1,"learning":1},
			{"skill":"Recommend system","star":"***","company":1,"learning":1},
			{"skill":"Flink","star":"****","company":1,"learning":1},
			{"skill":"AWS Kinesis","star":"****","company":1,"learning":1},
			{"skill":"QuickBI","star":"****","company":1,"learning":1},
			{"skill":"Tableau","star":"****","company":1,"learning":1},
			{},
			
			{"skill":"VIM","star":"****","company":1,"learning":1},
			{"skill":"Emacs ","star":"****","company":1,"learning":1},
			{"skill":"Kali Linux","star":"**","company":0,"learning":1},
			{"skill":"Cyber Security","star":"**","company":1,"learning":1},
			{"skill":"Net penetration","star":"**","company":0,"learning":1},
			{"skill":"Sql Injection","star":"**","company":0,"learning":1},
			{},

			{"skill":"ROS Robotics","star":"***","company":0,"learning":1},
			{"skill":"CAD Design","star":"***","company":0,"learning":1},
			{"skill":"Control System","star":"***","company":0,"learning":1},
			{"skill":"Raspberry PI","star":"***","company":0,"learning":1},
			{"skill":"Arduino","star":"***","company":0,"learning":1},
			{"skill":"STM32","star":"*","company":0,"learning":0},
			];


			let camera, scene, renderer;
			let controls;

			const objects = [];
			const targets = { table: [], sphere: [], helix: [], grid: [] };

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table

				let rgbInt = 20;
				let rgbA = 15;
				let rgbC = 222;

				for ( let i = 0; i < table.length; i += 1 ) {
					const node = table[i];
					if (JSON.stringify(node) == "{}") {
						console.log('change color');
						rgbInt += Math.ceil((Math.random() + 10) * 100 % 30);
						rgbA += Math.ceil((Math.random() + 10) * 100 % 30)
						rgbC -= Math.ceil((Math.random() + 10) * 100 % 10)
						continue;
					}

					const element = document.createElement( 'div' );
					element.className = 'element';
					element.style.backgroundColor = 'rgba(' + rgbA + ', ' + rgbInt + ', ' + rgbC + ',' + ( Math.random() * 0.5 + 0.45 ) + ')';

					const starGroup = document.createElement( 'div' );
					const star = document.createElement('img')
					star.src = "star.png";
					star.width = 25;
					for (let j = 0; j < node.star.length; j++) {
						starGroup.append(document.importNode(star, true));
					}
					element.appendChild( starGroup );

					const symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.textContent = node.skill;
					element.appendChild( symbol );

					if (node.company == 1) {
						const company= document.createElement('img')
						company.src = "company.png";
						company.width = 40;
						company.height = 40;
						company.className = "company-learning"
						element.appendChild( company );
					}

					if (node.learning == 1) {
						const learning = document.createElement('img')
						learning.src = "learning.png";
						learning.width = 40;
						learning.height = 40;
						learning.className = "company-learning"
						element.appendChild( learning );
					}

					const objectCSS = new CSS3DObject( element );
					objectCSS.position.x = Math.random() * 4000 - 2000;
					objectCSS.position.y = Math.random() * 4000 - 2000;
					objectCSS.position.z = Math.random() * 4000 - 2000;
					scene.add( objectCSS );

					objects.push( objectCSS );

					const object = new THREE.Object3D();
					object.position.x = ( tablePositionArr[i][0] * 140 ) - 1330;
					object.position.y = - ( tablePositionArr[i][1] * 180 ) + 990;

					targets.table.push( object );

				}

				// sphere

				const vector = new THREE.Vector3();

				for ( let i = 0, l = objects.length; i < l; i ++ ) {

					const phi = Math.acos( - 1 + ( 2 * i ) / l );
					const theta = Math.sqrt( l * Math.PI ) * phi;

					const object = new THREE.Object3D();

					object.position.setFromSphericalCoords( 800, phi, theta );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				// helix

				for ( let i = 0, l = objects.length; i < l; i ++ ) {

					const theta = i * 0.175 + Math.PI;
					const y = - ( i * 8 ) + 450;

					const object = new THREE.Object3D();

					object.position.setFromCylindricalCoords( 900, theta, y );

					vector.x = object.position.x * 2;
					vector.y = object.position.y;
					vector.z = object.position.z * 2;

					object.lookAt( vector );

					targets.helix.push( object );

				}

				// grid

				for ( let i = 0; i < objects.length; i ++ ) {

					const object = new THREE.Object3D();

					object.position.x = ( ( i % 5 ) * 400 ) - 800;
					object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
					object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

					targets.grid.push( object );

				}

				//

				renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new TrackballControls( camera, renderer.domElement );
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );

				const buttonTable = document.getElementById( 'table' );
				buttonTable.addEventListener( 'click', function () {

					transform( targets.table, 2000 );

				} );

				const buttonSphere = document.getElementById( 'sphere' );
				buttonSphere.addEventListener( 'click', function () {

					transform( targets.sphere, 2000 );

				} );

				const buttonHelix = document.getElementById( 'helix' );
				buttonHelix.addEventListener( 'click', function () {

					transform( targets.helix, 2000 );

				} );

				const buttonGrid = document.getElementById( 'grid' );
				buttonGrid.addEventListener( 'click', function () {

					transform( targets.grid, 2000 );

				} );

				transform( targets.helix, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( let i = 0; i < objects.length; i ++ ) {

					const object = objects[ i ];
					const target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}