window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function () {
        var scene = new BABYLON.Scene(engine);

        var camera = new BABYLON.ArcRotateCamera("Camera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 300, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        // Ground
        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 200, height: 200 }, scene);
        var groundMaterial = new BABYLON.StandardMaterial("groundMat", scene);
        groundMaterial.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.jpg", scene); // More realistic floor texture
        ground.material = groundMaterial;

        // Table
        var tableTop = BABYLON.MeshBuilder.CreateBox("tableTop", { height: 1, width: 30, depth: 15 }, scene);
        tableTop.position.y = 10;
        tableTop.material = new BABYLON.StandardMaterial("tableMat", scene);
        tableTop.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/wood.jpg", scene); // Realistic wood texture

        var createTableLeg = function (x, z) {
            var leg = BABYLON.MeshBuilder.CreateCylinder("tableLeg", { height: 10, diameter: 1 }, scene);
            leg.position.x = x;
            leg.position.y = 5;
            leg.position.z = z;
            leg.material = tableTop.material;
            return leg;
        };

        createTableLeg(-14, -7);
        createTableLeg(14, -7);
        createTableLeg(-14, 7);
        createTableLeg(14, 7);

        // Chair
        var chairSeat = BABYLON.MeshBuilder.CreateBox("chairSeat", { height: 1, width: 5, depth: 5 }, scene);
        chairSeat.position.y = 5;
        chairSeat.position.x = -20;
        chairSeat.position.z = -15;
        chairSeat.material = new BABYLON.StandardMaterial("chairMat", scene);
        chairSeat.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/leather.jpg", scene);

        var chairBack = BABYLON.MeshBuilder.CreateBox("chairBack", { height: 5, width: 1, depth: 5 }, scene);
        chairBack.position.y = 7.5;
        chairBack.position.x = -20;
        chairBack.position.z = -12.5;
        chairBack.material = chairSeat.material;

        var createChairLeg = function (x, z) {
            var leg = BABYLON.MeshBuilder.CreateCylinder("chairLeg", { height: 5, diameter: 0.5 }, scene);
            leg.position.x = x;
            leg.position.y = 2.5;
            leg.position.z = z;
            leg.material = chairSeat.material;
            return leg;
        };

        createChairLeg(-22.5, -17.5);
        createChairLeg(-17.5, -17.5);
        createChairLeg(-22.5, -12.5);
        createChairLeg(-17.5, -12.5);

        // Lamp
        var lampBase = BABYLON.MeshBuilder.CreateCylinder("lampBase", { height: 1, diameter: 2 }, scene);
        lampBase.position.y = 10.5;
        lampBase.position.x = 0;
        lampBase.position.z = 5;
        lampBase.material = new BABYLON.StandardMaterial("lampMat", scene);
        lampBase.material.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);

        var lampPole = BABYLON.MeshBuilder.CreateCylinder("lampPole", { height: 5, diameter: 0.5 }, scene);
        lampPole.position.y = 13;
        lampPole.position.x = 0;
        lampPole.position.z = 5;
        lampPole.material = lampBase.material;

        var lampHead = BABYLON.MeshBuilder.CreateSphere("lampHead", { diameter: 2 }, scene);
        lampHead.position.y = 15;
        lampHead.position.x = 0;
        lampHead.position.z = 5;
        lampHead.material = new BABYLON.StandardMaterial("lampHeadMat", scene);
        lampHead.material.diffuseColor = new BABYLON.Color3(1, 1, 0);

        var lampLight = new BABYLON.PointLight("lampLight", new BABYLON.Vector3(0, 15, 5), scene);
        lampLight.intensity = 0.5;

        // Book
        var book = BABYLON.MeshBuilder.CreateBox("book", { height: 0.5, width: 4, depth: 6 }, scene);
        book.position.y = 11;
        book.position.x = 5;
        book.position.z = 0;
        book.material = new BABYLON.StandardMaterial("bookMat", scene);
        book.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/book.jpg", scene);

        // Pen
        var pen = BABYLON.MeshBuilder.CreateCylinder("pen", { height: 0.5, diameter: 0.2 }, scene);
        pen.position.y = 11;
        pen.position.x = 6;
        pen.position.z = 2;
        pen.material = new BABYLON.StandardMaterial("penMat", scene);
        pen.material.diffuseColor = new BABYLON.Color3(0, 0, 1); // Blue

        // Pencil
        var pencil = BABYLON.MeshBuilder.CreateCylinder("pencil", { height: 0.5, diameter: 0.2 }, scene);
        pencil.position.y = 11;
        pencil.position.x = 4;
        pencil.position.z = 2;
        pencil.material = new BABYLON.StandardMaterial("pencilMat", scene);
        pencil.material.diffuseColor = new BABYLON.Color3(1, 1, 0); // Yellow

        // Sofa
        var sofaSeat = BABYLON.MeshBuilder.CreateBox("sofaSeat", { height: 2, width: 20, depth: 10 }, scene);
        sofaSeat.position.y = 2;
        sofaSeat.position.z = 30;
        sofaSeat.material = new BABYLON.StandardMaterial("sofaMat", scene);
        sofaSeat.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/fabric.jpg", scene); // Realistic fabric texture

        var sofaBack = BABYLON.MeshBuilder.CreateBox("sofaBack", { height: 10, width: 20, depth: 2 }, scene);
        sofaBack.position.y = 7;
        sofaBack.position.z = 35;
        sofaBack.material = sofaSeat.material;

        var sofaArmLeft = BABYLON.MeshBuilder.CreateBox("sofaArmLeft", { height: 10, width: 2, depth: 10 }, scene);
        sofaArmLeft.position.y = 7;
        sofaArmLeft.position.z = 30;
        sofaArmLeft.position.x = -9;
        sofaArmLeft.material = sofaSeat.material;

        var sofaArmRight = BABYLON.MeshBuilder.CreateBox("sofaArmRight", { height: 10, width: 2, depth: 10 }, scene);
        sofaArmRight.position.y = 7;
        sofaArmRight.position.z = 30;
        sofaArmRight.position.x = 9;
        sofaArmRight.material = sofaSeat.material;

        // Almirah
        var almirah = BABYLON.MeshBuilder.CreateBox("almirah", { height: 40, width: 20, depth: 10 }, scene);
        almirah.position.y = 20;
        almirah.position.x = -50;
        almirah.material = new BABYLON.StandardMaterial("almirahMat", scene);
        almirah.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/wood.jpg", scene);

        // Bed
        var bedBase = BABYLON.MeshBuilder.CreateBox("bedBase", { height: 5, width: 30, depth: 60 }, scene);
        bedBase.position.y = 2.5;
        bedBase.position.x = 50;
        bedBase.position.z = -30;
        bedBase.material = new BABYLON.StandardMaterial("bedMat", scene);
        bedBase.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/wood.jpg", scene);

        var mattress = BABYLON.MeshBuilder.CreateBox("mattress", { height: 3, width: 28, depth: 58 }, scene);
        mattress.position.y = 5.5;
        mattress.position.x = 50;
        mattress.position.z = -30;
        mattress.material = new BABYLON.StandardMaterial("mattressMat", scene);
        mattress.material.diffuseColor = new BABYLON.Color3(1, 1, 1); // White mattress

        var bedsheet = BABYLON.MeshBuilder.CreateBox("bedsheet", { height: 0.5, width: 28, depth: 58 }, scene);
        bedsheet.position.y = 6.25;
        bedsheet.position.x = 50;
        bedsheet.position.z = -30;
        bedsheet.material = new BABYLON.StandardMaterial("bedsheetMat", scene);
        bedsheet.material.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/bedsheet.jpg", scene); // Realistic bedsheet texture

        // Drag and Drop Functionality
        var startingPoint;
        var currentMesh;

        var getGroundPosition = function (evt) {
            var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh == ground; });
            if (pickinfo.hit) {
                return pickinfo.pickedPoint;
            }
            return null;
        }

        var onPointerDown = function (evt) {
            if (evt.button !== 0) {
                return;
            }
            var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh !== ground; });
            if (pickInfo.hit) {
                currentMesh = pickInfo.pickedMesh;
                startingPoint = getGroundPosition(evt);
                if (startingPoint) {
                    setTimeout(function () {
                        camera.detachControl(canvas);
                    }, 0);
                }
            }
        }

        var onPointerUp = function () {
            if (startingPoint) {
                camera.attachControl(canvas);
                startingPoint = null;
                return;
            }
        }

        var onPointerMove = function (evt) {
            if (!startingPoint) {
                return;
            }
            var current = getGroundPosition(evt);
            if (!current) {
                return;
            }
            var diff = current.subtract(startingPoint);
            currentMesh.position.addInPlace(diff);
            startingPoint = current;
        }

        canvas.addEventListener("pointerdown", onPointerDown, false);
        canvas.addEventListener("pointerup", onPointerUp, false);
        canvas.addEventListener("pointermove", onPointerMove, false);

        scene.onDispose = function () {
            canvas.removeEventListener("pointerdown", onPointerDown);
            canvas.removeEventListener("pointerup", onPointerUp);
            canvas.removeEventListener("pointermove", onPointerMove);
        }

        return scene;
    };

    var scene = createScene();

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    });
});
