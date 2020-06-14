If you've seen my webpage and are interested in using a similar format / template you can find all the source code here.

## Setup

```
$ git clone https://github.com/mkomod//personal-webpage-template
```

## Config

You only need to configure `scripts/update`. The script deploys the website, there are several deploy options:

 * github pages
 * private server


## Articles

Articles are processed by the `makeposts` script. The script looks in `./markdown` for posts and process them with pandoc. By default `post.template.html` as the post template, this can be changed to suit your needs. 

```
< Date >_< Title >.md
```

For example `20190831_A new post.md`. A background image can be provided by adding a file named `< Date >.jpg` to `statics/post_bg`. Continuing our example, a background image for out post would be `statics/post_bg/20190831.jpg`.

After the posts are processed an index is created, which is then added to `post.list.template.html`.

## Deploying

A makefile is provided to deploy the webpage. Running:

```
$ make 
```

deploys changes made. 


To preview changes, run:

```
$ make preview
```

