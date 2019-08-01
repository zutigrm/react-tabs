# Elegant React Tabs
Simple and elegant tabs component for react.

npmjs link (https://www.npmjs.com/package/elegant-react-tabs)

## Usage Instructions

To install it in your project:

Using node

```javascript
npm install --save react-elegant-tabs
```

Using yarn

```javascript
yarn add react-elegant-tabs
```

Then just include it in your project with

```javascript
import ReactTabs from 'react-elegant-tabs';
```

Usage is very straightforward. Tabs take two props:
- `tabs` array of objects containing tab name and component to render and
- `config` object containing custom options

Available parameters for `config` are: `active` - string of tab name to set as active by default, `layout` string name of layout (currently simple and default are available), `tabAlign` alignment of the content (takes 'center' | 'right', left is default), and `classes`, additional custom classes in string format.

Most basic example:
```javascript
import ReactTabs from 'react-elegant-tabs';

<ReactTabs tabs = {[
	{tab: 'Tab 1', component: <Component1 />},
	{tab: 'Tab 2', component: <Component2 />},
]} />
```
`tab` is the text to be displayed in the tab navigation and `component` will be rendered into the tabs content. There is also a third property `route` if you want to switch url with tabs. This takes string of the url path you want to open.

## Examples

Basic example, including only required params:
```javascript
<ReactTabs tabs = {[
	{tab: 'Tab 1', component: <Component1 />},
	{tab: 'Tab 2', component: <Component2 />},
	{tab: 'Tab 3', component: <Component3 />},
]} />
```

Custom example, setting Tab 2 as active by default and using simple layout:
```javascript
<ReactTabs 
	tabs = {[
		{tab: 'Tab 1', component: <Component1 />},
		{tab: 'Tab 2', component: <Component2 />},
		{tab: 'Tab 3', component: <Component3 />},
	]} 
	config = {{
		active: 'Tab 2', 
		layout: 'simple',
		classes: 'home-tabs',
		tabAlign: 'center'
	}} 
/>
```

Example with routing (if you want to navigate through urls with tab change). All you need to do is ass route property with path of the url:
```javascript
<ReactTabs tabs = {[
	{tab: 'Tab 1', route: '/page-1', component: <Component1 />},
	{tab: 'Tab 2', route: '/page-2', component: <Component2 />},
	{tab: 'Tab 3', route: '/pages/simple', component: <Component3 />},
]} />
```