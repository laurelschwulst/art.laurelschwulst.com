<div class="all-bricks">

  <?php foreach(page('works')->children()->visible()->sortBy('year')->flip() as $work): ?>
  
  <div class="brick-container">
  	
  	  <?php if($work->dormant() == '1'): ?>
  	  	<span class="dormant brick">
  	  <?php else: ?>
      	<a href="<?php echo $work->url() ?>" class="brick">
      <?php endif ?>

        <?php echo $work->title()->html() ?>

      <?php if($work->dormant() == '1'): ?>
  	  	</span>
  	  <?php else: ?>
      	</a>
      <?php endif ?>

  </div>

  <?php endforeach ?>

</div>