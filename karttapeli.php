<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>



    <script src="p5/p5.js"></script>
    <script src="p5/p5.collide2d.js"></script>
    <script type="text/javascript" src="karttapeli.js"></script>

	<title>Karttapeli</title>
</head>
<body>
<div class="container-fluid" style="margin-bottom: 50px; margin-top: 10px;">
	<div class="row">
		<div class="col-md-12">
			<h5>Change noicemap generation settings (changing these settings resets all your stuff)</h5>
		</div>
		<div class="col-md-6">
			<input type="range" name="value_c" min="0" max="500" class="form-control" value="255" id="value_c" onblur="Generate();">
		</div>

		<div class="col-md-6">
			<div class="row">
				<div class="col-md-6">
					<input type="text" name="value_1" class="form-control" value="0.01" id="value_1" onblur="Generate();">
				</div>

				<div class="col-md-6">
					<input type="text" name="value_2" class="form-control" value="0.01" id="value_2" onblur="Generate();">
				</div>
			</div>
		</div>

		<div class="col-md-3">
			<button class="btn btn-light" onclick="Generate();">Update</button>
		</div>

		<div class="col-md-12">
			<p>ARROW KEYS TO MOVE</p>
		</div>
	</div>
</div>
</body>


</html>