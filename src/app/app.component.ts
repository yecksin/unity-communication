import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unity-communication';
  ngOnInit() {
    //@ts-ignore
    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "unity/Build/unity.data",
      frameworkUrl: "unity/Build/unity.framework.js",
      codeUrl: "unity/Build/unity.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "YourCompagny",
      productName: "unity",
      productVersion: "1.0"
    });
}

constructor(private zone: NgZone) {
  // Asignar la referencia de Angular a una variable global
  window['angularComponentRef'] = {
    component: this,
    zone: this.zone
  };
}

// Método para manejar la inicialización de Unity
onUnityReady(message: string) {
  console.log('Unity Ready:', message);
  // Aquí puedes manejar lo que ocurra cuando Unity esté listo
}

// Método para manejar eventos desde Unity
onUnityEvent(message: string) {
  console.log('Event from Unity:', message);
  // Aquí puedes manejar lo que ocurra con el evento de Unity
}

onCube(message: string) {
  console.log('Event from Unity:', message);
  console.log("cube clicked");
  // Aquí puedes manejar lo que ocurra con el evento de Unity
}

}
