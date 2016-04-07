<?php snippet('header') ?>

    <div class="expanded-brick <?php echo $page->theme() ?>">

      <div class="info-zone">

          <h1><?php echo $page->title() ?></h1>
          
          <div class="description">
            <?php echo $page->description()->kirbytext() ?>
          </div>

          <div class="year">
            <?php echo $page->year() ?>
          </div>

      </div>

    </div>

    <nav>
        <a class="brick" href="../">Back</a>
    </nav>

<?php snippet('footer') ?>