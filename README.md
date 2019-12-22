## How to install
Clone this repo into your 'modules' folder

```bash
git clone https://github.com/shnopy/MMM-CatFacts.git
cd MMM-CatFacts
npm install
```

# How to use

```javascript
modules:[
   {
			module: 'MMM-catfact',
			position: 'top_left',
			config: {
				maxlength: 40,
				fadespeed: 2000
			}
		},
]
```

|Option|Description|
|---|---|
|`maxlength`|`Integer` Sets how many characters can be in the fact. **Default: 40**|
|`fadespeed`|`Integer` Controls fade speed (`ms`). **Default: 2000**|
