"""empty message

Revision ID: 7809f6ae50f5
Revises: cc162a6ebaff
Create Date: 2018-04-26 19:33:46.519978

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7809f6ae50f5'
down_revision = 'cc162a6ebaff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tweet', sa.Column('tweet_id', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('tweet', 'tweet_id')
    # ### end Alembic commands ###
