# annotation-visualizer

This is a prototype about extracting data from a static json file or later on from an api for mapping the result boxes to an uploaded image.
The usecase is about visalizing the tracking of cars, buses or pedestrians which were recognized by the api.
Those boxes are showing relevant obstacles for the sensoric of automated driving.

## Data storage

The api Result is stored in the store.js to access the result from every component which needs to process the result. In a further step there should be an action which calls the api by sending a POST request with the image(s). The result of the request can be set by the mutation "setCurrentAnnotations". The image upload could be on a seperate route with an html native upload for files.

## Design challenge

The hardest step for me was the tracking of the image size in combination with responsive design of the image.
I wanted the image to have the full width for ui reasons, but the resizing of the browser would manipulate the result.
I though about calculating the image resolution to transfer the scale to the current width.

## Annotation Component

The Annotation component can easily be extended by more important values.
As a first step I selected "x", "y", "z", "label", "height" and "width".

## Box Component

The Box component is meant to be used for every annotation from the api result.
The component should be that reactive that it just depends on the 4 props for the positioning.
As a next step i thought about coloring the same labels with the same color.
For example: car = red, pedestrian = yellow, bus = blue

## Testing

If there is more time i would use vue-test-utils to mock the components for testing.
I would write some cases for hardcoded annotation examples.
For testing the ImageSlider component i would test some edge cases like press previous on the first image.

## Images

I tested with six hardcoded images in one array. In a further step i would automate the process of tracking the file names in a specific folder or define one by uploading to the webserver.

## Navigation

The navbar contains only the image slider at the moment. In a further step i would implement the file upload for the images as a new route.
A static page for payment information could be usefull for the user to get an idea what the upload could cost.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
