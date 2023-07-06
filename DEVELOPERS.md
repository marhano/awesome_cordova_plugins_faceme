# Creating an Awesome Cordova Plugin Wrapper Guide (Pro edition) :sparkles: 

Create an awesome Cordova plugin wrapper for your native plugin with this comprehensive guide. Let's get started! :rocket:

## 📥 Cloning the "awesome-cordova-plugins" Project

First, navigate to your Cordova plugins folder and clone the "awesome-cordova-plugins" project by danielsogl:

```shell
git clone https://github.com/danielsogl/awesome-cordova-plugins.git
```

## ⚙️ Installing Required Modules

Install the necessary modules from package.json and "@awesome-cordova-plugin/core" using the following commands:

```shell
npm install
npm install @awesome-cordova-plugins/core
```

## 📦 Creating a New Plugin Wrapper

To create a new plugin wrapper, use the following command. Replace "PluginName" with the name of your plugin:

```shell
gulp plugin:create -n PluginName
```

This command generates a new directory at "src/@ionic-native/plugins/plugin-name/" with a single file named "index.ts". This file is where you'll define the plugin definitions.

Inside the "index.ts" file, you'll see a code snippet similar to this:

```typescript
@Plugin({
  pluginName: 'PluginName',
  plugin: '', // npm package name, e.g., "cordova-plugin-camera"
  pluginRef: '', // variable reference to call the plugin, e.g., "navigator.geolocation"
  repo: '', // GitHub repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL variables required by the plugin
  platforms: [] // Array of platforms supported, e.g., ['Android', 'iOS']
})
```

Make sure to update the following fields:

- `pluginName`: Your plugin name.
- `plugin`: You can also use your GitHub repository for your plugin.
- `pluginRef`: Your plugin name.
- `repo`: GitHub repository.
- `install`: Optional.
- `platforms`: Platforms that your plugin will be available on.

Next, add the methods from your plugin to the "index.ts" file. For example:

```typescript
@Cordova()
coolMethod(arg1: string): Promise<any> {
   return;
}
```

## 🧪 Testing the Wrapper

To test the plugin wrapper, follow these steps:

1. Run `npm run build` in the ionic-native project. This will create a `dist` directory containing the compiled packages.
2. Copy the package(s) you created/modified from `dist/@ionic-native/plugin-name` to your app's `node_modules` directory, under the `@ionic-native` directory. For example:
   ```shell
   cp -r dist/@ionic-native/plugin-name ../my-app/node_modules/@ionic-native/
   ```
3. To simplify installation, you can publish your wrapper to GitHub and install it using `npm install <github-repo>`.

## 📁 Organizing the Wrapper

To organize your wrapper, follow these steps:

1. Create a separate folder (e.g., "awesome_cordova_plugins_pluginname") inside your Cordova plugin folder where you store all your plugin projects.
2. Copy the contents of the wrapper from `dist/@ionic-native/plugin-name` to the newly created folder.
3. Open the folder in Visual Studio Code (VSCode) and publish the project.
4. Create a `package.json` file by running `npm init`.
5. Set the package name to `@awesome-cordova-plugins/plugin-name`.
6. Set the entry point to `bundle.js`.
7. Open the newly created `package.json` file and add `"module": "index.js

"` below the `"main"` tag.
8. Save the changes and commit them to your version control system.

Now, you can use npm to install the awesome Cordova plugin wrapper for your native plugin!

## 🚀 Updating the Wrapper

To update your wrapper, follow these steps:

1. Open the "awesome-cordova-plugins" project and navigate to your wrapper template at `src/@ionic-native/plugins/plugin-name/`.
2. Make your desired changes in the `index.ts` file.
3. Run `npm run build` to compile the changes.
4. Copy the contents of `dist/@ionic-native/plugin-name` to your "awesome-cordova-plugins" project.
5. Commit and push the changes.
6. Repeat these steps for any further updates.

## 🧪 Testing with an Ionic Project

To test your wrapper with an Ionic project, import the plugin to `app.module.ts`:

```typescript
import { PluginName } from '@awesome-cordova-plugins/plugin-name/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [],
  providers: [PluginName],
})
export class AppModule {}
```

In your `home.page.ts`, import the plugin as well and add it to the constructor:

```typescript
import { PluginName } from '@awesome-cordova-plugins/plugin-name/ngx';

constructor(private pluginName: PluginName) {}

ngOnInit() {
  this.pluginName.coolMethod('Hello World')
    .then((result) => {
      alert(result);
    })
    .catch((error) => {
      alert(error);
    });
}
```

Remember to wrap it with `platform.ready()` when necessary.

That's it! You now have a working wrapper for your native plugin. Enjoy the development journey! :tada:
