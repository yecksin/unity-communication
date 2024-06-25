import { Component } from '@angular/core';
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
}
