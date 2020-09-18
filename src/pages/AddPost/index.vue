<template>
  <div class="container contact">
    <div class="row m-0">
      <div class="col-md-3">
        <div class="contact-info">
          <img src="https://image.ibb.co/kUASdV/contact-image.png" class="m-0" alt="image" />
          <!-- <h2>Contact Us</h2> -->
          <h4 class="text-white">Create Your Post</h4>
        </div>
      </div>
      <div class="col-md-9">
        <div class="contact-form">
          <div class="form-group">
            <label class="control-label col-sm-2" for="fname">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" placeholder="Title" name="title" />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="comment">Post</label>
            <div class="col-sm-10">
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary ml-3">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
};
</script>

<style  scoped>
body {
  background-color: #25274d;
}
.contact {
  padding: 4%;
  height: 440px;
}
.col-md-3 {
  background: #064b90;
  padding: 4%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.contact-info {
  margin-top: 10%;
}
.contact-info img {
  margin-bottom: 15%;
}
.contact-info h2 {
  margin-bottom: 10%;
}
.col-md-9 {
  background: #fff;
  padding: 3%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.contact-form label {
  font-weight: 600;
}
.contact-form button {
  background: #25274d;
  color: #fff;
  font-weight: 600;
}
.contact-form button:focus {
  box-shadow: none;
}
</style>