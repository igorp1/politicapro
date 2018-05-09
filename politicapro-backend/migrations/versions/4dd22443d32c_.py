"""empty message

Revision ID: 4dd22443d32c
Revises: 23fdf3f3b252
Create Date: 2018-05-04 16:17:14.039326

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4dd22443d32c'
down_revision = '23fdf3f3b252'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tweet_count')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tweet_count',
    sa.Column('id', sa.VARCHAR(), nullable=False),
    sa.Column('for_date', sa.DATETIME(), nullable=True),
    sa.Column('key', sa.VARCHAR(), nullable=True),
    sa.Column('count', sa.INTEGER(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###