## How to install
Clone this repo into your 'modules' folder

```bash
git clone https://github.com/shnopy/MMM-CatFacts.git
cd MMM-CatFacts
npm i
```

# How to use

```javascript
modules:[
   {
			module: 'MMM-catfact',
			position: 'top_left',
			config: {
				maxlength: 80
			}
		},
]
```

|Option|Optional Settings Description|
|---|---|
|`maxlength`|Int. sets how many characters can be in the fact. **Default: 40|**
